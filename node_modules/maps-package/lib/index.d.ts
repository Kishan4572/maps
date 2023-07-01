export declare class maps {
    constructor();
    map(mapID?: string, coordinate?: [number, number], Zoom?: number): void;
    google(type: string): void;
    osm(): void;
    esri(): void;
    topo(): void;
    cycleOSM(): void;
    waterColor(): void;
}
