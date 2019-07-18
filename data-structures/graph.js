class GNode {

    constructor(value, lines) {
        this.value = value;
        this.lines = lines;
    }
    value;
    lines = []
}

class Graph {
    nodes = [];

    addNode(value) {
        return this.nodes.push(new GNode(value,[]));
    }

    find(value) {
        return this.nodes.find(node => {
            return node.value === value;
        })
    }

    addLine(startValue, endValue) {
        // find nodes
        let startNode = this.find(startValue);
        let endNode = this.find(endValue);

        if(!startNode || !endNode) {
            throw new Error('Nodes don`t exists');
        }

        startNode.lines.push(endNode);
    }

    toString() {
        this.nodes.forEach((node) => {
            console.log(`${node.value} -> `, node.lines);
        })
    }
}