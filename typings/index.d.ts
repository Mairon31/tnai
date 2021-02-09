declare module "tnai" {
    export default class TnaiAPI {
        constructor(token: string);
        sfw: sfw;
        // hentai: nsfw;
        // real: real;
    }
    export interface sfw {
        kiss(queryParams?: string): Promise<string>;
        hug(queryParams?: string): Promise<string>;
        kick(queryParams?: string): Promise<string>;
        slap(queryParams?: string): Promise<string>;
        dance(queryParams?: string): Promise<string>;
        happy(queryParams?: string): Promise<string>;
        confused(queryParams?: string): Promise<string>;
        angry(queryParams?: string): Promise<string>;
        cry(queryParams?: string): Promise<string>;
        blush(queryParams?: string): Promise<string>;
        sleep(queryParams?: string): Promise<string>;
        laugh(queryParams?: string): Promise<string>;
        feed(queryParams?: string): Promise<string>;
        pat(queryParams?: string): Promise<string>;
        bored(queryParams?: string): Promise<string>;
        greeting(queryParams?: string): Promise<string>;
        sad(queryParams?: string): Promise<string>;
        think(queryParams?: string): Promise<string>;
    }
    export interface hentai {
        boobs(queryParams?: string): Promise<string>;
        anal(queryParams?: string): Promise<string>;
        boobs(queryParams?: string): Promise<string>;
        blowjob(queryParams?: string): Promise<string>;
        pussy(queryParams?: string): Promise<string>;
        cum(queryParams?: string): Promise<string>;
        yuri(queryParams?: string): Promise<string>;
        double(queryParams?: string): Promise<string>;
        gif(queryParams?: string): Promise<string>;
        futa(queryParams?: string): Promise<string>;
        yaoi(queryParams?: string): Promise<string>;
        neko(queryParams?: string): Promise<string>;
        femdom(queryParams?: string): Promise<string>;
        pokemon(queryParams?: string): Promise<string>;
        yiff(queryParams?: string): Promise<string>;
    }
    export interface real {
        ass(queryParams?: string): Promise<string>;
        pussy(queryParams?: string): Promise<string>;
        boobs(queryParams?: string): Promise<string>;
        cosplay(queryParams?: string): Promise<string>;
        porngif(queryParams?: string): Promise<string>;
        cosplay(queryParams?: string): Promise<string>;
        bdsm(queryParams?: string): Promise<string>;
        black(queryParams?: string): Promise<string>;
        traps(queryParams?: string): Promise<string>;
        lesbians(queryParams?: string): Promise<string>;
        pawg(queryParams?: string): Promise<string>;
    }
}
