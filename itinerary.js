class Graph {
    constructor(airports, routes) {
        this.airports = airports;
        this.routes = routes;
        this.adjacencyList = new Map();
    }
    addVertex(airport) {
        this.adjacencyList.set(airport, []);
    }
    addEdge(origin, destination) {
        this.adjacencyList.get(origin).push(destination);
        this.adjacencyList.get(destination).push(origin);
    }
}
