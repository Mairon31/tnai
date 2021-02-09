declare module "tnai" {
    export default class Client {
        constructor(token: string);
        sfw: sfw;
        // hentai: nsfw;
        // real: real;
    }
    export interface sfw {
        kiss(): Promise<string>;
        hug(): Promise<string>;
        kick(): Promise<string>;
        slap(): Promise<string>;
        dance(): Promise<string>;
        happy(): Promise<string>;
        confused(): Promise<string>;
        angry(): Promise<string>;
        cry(): Promise<string>;
        blush(): Promise<string>;
        sleep(): Promise<string>;
        laugh(): Promise<string>;
        feed(): Promise<string>;
        pat(): Promise<string>;
        bored(): Promise<string>;
        greeting(): Promise<string>;
        sad(): Promise<string>;
        think(): Promise<string>;
    };
    export interface hentai {
        boobs(): Promise<string>;
        anal(): Promise<string>;
        boobs(): Promise<string>;
        blowjob(): Promise<string>;
        pussy(): Promise<string>;
        cum(): Promise<string>;
        yuri(): Promise<string>;
        double(): Promise<string>;
        gif(): Promise<string>;
        futa(): Promise<string>;
        yaoi(): Promise<string>;
        neko(): Promise<string>;
        femdom(): Promise<string>;
        pokemon(): Promise<string>;
        yiff(): Promise<string>;
    }
    export interface real {
        ass(): Promise<string>;
        pussy(): Promise<string>;
        boobs(): Promise<string>;
        cosplay(): Promise<string>;
        porngif(): Promise<string>;
        cosplay(): Promise<string>;
        bdsm(): Promise<string>;
        black(): Promise<string>;
        traps(): Promise<string>;
        lesbians(): Promise<string>;
        pawg(): Promise<string>;
    }
}
