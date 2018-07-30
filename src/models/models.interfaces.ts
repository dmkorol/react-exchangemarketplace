export interface IEListItem {
    id: string;
    title: string;
    url: string;
    imageUrl: string;
    industry: IEIndastry[];
    businessType: IEType[];
    createdDate: number; // unix time ms
    revenue: number;
    price: number;
    sessions: number;
    profit: number;
}

export interface IEFilter{
    id: string;
    name: string;
    title: string;
    selected: Array<IEFilterItem['id']>;
    options: IEFilterItem
}

export interface IEFilterItem {
    id: string;
    title: string;
}

export interface IEDetailedItem extends IEListItem {
    imageUrlMobile: string;
    description: string;
    weekHours: number;
}

export interface IEIndastry {
    id: number;
    title: string;
}

export interface IEType {
    id: number;
    title: string;
}

export interface IESeller {
    id: string;
    name: string;
    short_name: string;
}

export interface IEAdBanners {
    id: string;
    image: string;
}