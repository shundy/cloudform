"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 2.0.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class StageKey {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StageKey = StageKey;
class ApiKey extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::ApiGateway::ApiKey', properties);
    }
}
ApiKey.StageKey = StageKey;
exports.default = ApiKey;
