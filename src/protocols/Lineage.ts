export type Lineage = {
    id?: number,
    name: string,
    maxAge: number,
    adultAge: number,
    isPlayable: boolean,
    description: string
}

export type LineageInfo = {
    name?: string,
    maxAge?: number,
    adultAge?: number,
    isPlayable?: boolean,
    description?: string
}