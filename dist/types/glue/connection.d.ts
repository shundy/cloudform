import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ConnectionInput {
    Description?: Value<string>;
    ConnectionType: Value<string>;
    MatchCriteria?: List<Value<string>>;
    PhysicalConnectionRequirements?: PhysicalConnectionRequirements;
    ConnectionProperties: any;
    Name?: Value<string>;
    constructor(properties: ConnectionInput);
}
export declare class PhysicalConnectionRequirements {
    AvailabilityZone?: Value<string>;
    SecurityGroupIdList?: List<Value<string>>;
    SubnetId?: Value<string>;
    constructor(properties: PhysicalConnectionRequirements);
}
export interface ConnectionProperties {
    ConnectionInput: ConnectionInput;
    CatalogId: Value<string>;
}
export default class Connection extends ResourceBase {
    constructor(properties?: ConnectionProperties);
}
