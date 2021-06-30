import { IProps } from '../common/entity';
export default class Layer {
    constructor({ region, credentials }: {
        region: any;
        credentials: any;
    });
    publish(props: IProps): Promise<any>;
    list({ prefix }: {
        prefix: any;
    }, table: any): Promise<any>;
    versions({ layerName }: {
        layerName: any;
    }, table: any): Promise<any>;
    getVersion({ version, layerName }: {
        version: any;
        layerName: any;
    }): Promise<any>;
    deleteVersion({ version, layerName }: {
        version: any;
        layerName: any;
    }): Promise<void>;
    deleteLayer({ layerName }: {
        layerName: any;
    }): Promise<void>;
}
