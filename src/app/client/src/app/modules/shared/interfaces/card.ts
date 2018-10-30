export interface ICard {
    name: string;
    medium?: string;
    subject?: string;
    creator?: string;
    resourceType?: string;
    gradeLevel?: any;
    image?: string;
    imageVisibility?: boolean;
    description?: string;
    maxCount?: number;
    progress?: number;
    ribbon?: {
        right?: { class: string, name: string };
        left?: { class: string, name: string , image: string }
    };
    rating?: number;
    metaData?: any;
    action?: {
        right?: {
            class: string,
            text?: string,
            eventName: string,
            displayType: string
        };
        left?: {
            class: string,
            text?: string,
            eventName: string,
            displayType: string
        };
        onImage?: {
            eventName: string
        };
    };
}
