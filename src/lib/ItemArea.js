import areaVue from './area-vue.json'
import Http from '../plugins/Http'



export default class ItemArea {

    static getSub(obj, parent) {



        const roots = Object.keys(obj).map(el => ({ label: obj[el], code: el, children: [], parent: null }));
        roots.forEach(root => {
            root.parent = parent;

            if (areaVue[root.code]) {
                // 存在在一级
                root.children = this.getSub(areaVue[root.code], root);
            }
        });
        return roots;
    }
    static async getTree() {
        const res = await Http.post('/item/getArea');
        const list = res.data;
        const nodes = [];
        list.forEach(level1 => {
            const node1 = { label: level1.p, children: [], count: 0, path: `${level1.p}//` };

            list.forEach(level2 => {
                const node2 = { label: level2.c, children: [], count: 0, path: `${level1.p}/${level2.c}/` };

                list.forEach(level3 => {
                    const node3 = { label: level3.a, children: [], count: 0, path: `${level1.p}/${level2.c}/${level3.a}` };
                    if (level2.c == level3.c && !node2.children.find(el => el.label == level3.a)) {
                        node2.children.push(node3);
                    }
                });

                if (level2.p == level1.p && !node1.children.find(el => el.label == level2.c)) {
                    node1.children.push(node2);
                }

            });

            if (!nodes.find(el => el.label == level1.p)) {
                nodes.push(node1);
            }
        });
        for (let i = 0; i < nodes.length; i++) {
            const element = nodes[i];
            await this.getTotal(element);
        }
        return nodes;
    }

    static async getTotal(node) {

        const res = await Http.post('/item/getAreaCount', {
            p: node.path.split('/')[0],
            c: node.path.split('/')[1],
            a: node.path.split('/')[2],
        });
        node.count = res.data
        if (node.children.length >= 0) {
            for (let i = 0; i < node.children.length; i++) {
                const element = node.children[i];
                await this.getTotal(element);
            }
        }

    }


}