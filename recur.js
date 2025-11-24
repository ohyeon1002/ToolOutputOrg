export default function objTrav(obj) {
    if(typeof obj === 'object' && obj !== null){
        return Object.entries(obj).map(([K,V])=>{return {key:K, value:objTrav(V)}});
    }
    else return obj;
}