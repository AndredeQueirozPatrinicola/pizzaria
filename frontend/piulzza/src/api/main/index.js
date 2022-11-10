class Api {
    constructor() {
        this.api = "http://127.0.0.1:8000/api/"
        this.apiSabores = this.api + "sabores"
        this.apiPizza = this.api + 'pizza'
        this.apiPedidos = this.api + 'pedidos'
    }

    api_Sabores() {
        fetch(
            this.apiSabores)
            .then((res) => {
                res.json()
            })
            .then((json) => {
                console.log(json)
                return json
            });
    }
}

export default Api