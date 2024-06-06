const url: string = 'http://api.exchangeratesapi.io/v1/latest?access_key=339ee2e5ada4e38a19f5867c837136d6';

interface RatesResponce{
    success: boolean,
    timestamp: number,
    base: string,
    date: string,
    rates: Record<string, number>;
    error?: {
        code: number,
        type: string,
        info: string
    };
}

async function getRates(): Promise<RatesResponce>{
    try {
        const responce: Response = await fetch(url);

        if(responce.ok != true){
            const error = await responce.json();
            throw new Error(error.message || 'Error fetching exchange rates')
        }

        return responce.json() as Promise<RatesResponce>;

    } catch (error: any) {
        console.log(error.message);
        throw error;
    }
}

export default getRates;