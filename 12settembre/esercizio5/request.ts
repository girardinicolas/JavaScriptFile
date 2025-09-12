/**
 * Funzione generica che fa fetch e ritorna un JSON tipizzato
 * @param url URL da cui scaricare i dati
 * @returns dati tipizzati di tipo T
 */
export async function request<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: T = await response.json();
    return data;
}
