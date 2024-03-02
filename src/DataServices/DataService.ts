const getData = async () => {
    const promise : Response = await fetch("https://api.adviceslip.com/advice ");
    const data : Slip = await promise.json();
    return data.slip;
}

export {getData}

type Slip = {
    slip: { advice:string, id:number }
}