
const agentsInfoArray = [];

function getAgentInfo() {

    return new Promise((resolve, reject)=>{
        fetch('https://65eae93a43ce16418932cbf9.mockapi.io/users/agent')
        .then(res => res.json())
        .then( data => {
            if(data) {
                agentsInfoArray.push(...data);
                const rnd = Math.floor(Math.random() * 6)
                const agent = agentsInfoArray[rnd]
                console.log(agent)
                resolve (agent);
            } else {
                reject(new Error('No se cargaron datos'))
            }
        }).catch(error => {
        console.error('Error al obtener los datos:', error);
        reject(error)
        });
    })
    

}

module.exports = {
    getAgentInfo
}