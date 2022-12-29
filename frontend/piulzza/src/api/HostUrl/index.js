function getHostUrl(){
    const host = window.location.host;
    const devReactOne ="127.0.0.1:3000"
    const devReactTwo ="localhost:3000"
    const devDjangoOne = "http://127.0.0.1:8000" 
    const devDjangoTwo = "http://localhost:8000"

    if (host === devReactOne){
        return devDjangoOne 
    }
    else if(host === devReactTwo){
        return devDjangoTwo
    }
    else if(host.includes('localhost') || host.includes("127.0.0.1:8000")){
        return `http://${host}`;
    }
    else{
        return `https://${host}`;
    }
}


export default getHostUrl;