"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class StringAttributeConstraints extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::StringAttributeConstraints', properties, dependsOn);
    }
}
exports.default = StringAttributeConstraints;