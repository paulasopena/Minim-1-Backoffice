export interface State {
    _id?: any;
    indicator: "offline" | "online";
    available: number;
    last_updated: Date;
}