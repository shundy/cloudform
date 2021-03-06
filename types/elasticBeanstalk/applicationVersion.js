"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 2.0.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SourceBundle {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SourceBundle = SourceBundle;
class ApplicationVersion extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::ElasticBeanstalk::ApplicationVersion', properties);
    }
}
ApplicationVersion.SourceBundle = SourceBundle;
exports.default = ApplicationVersion;
