const fs = require('fs');
const { map } = require('underscore');
const _ = require('underscore');
const schema = JSON.parse(fs.readFileSync('./meta.json'));

const getType = (prop, required) => {
    var typeList = !prop ? ["string"] : _.map(prop, val => val.type);
    typeList.push('null');
    return typeList;
}
const getAdditional = (prop, name) => {
    const result  = {}
    if (!prop) return result;

    if(name.indexOf('Id') > -1) {
        result["format"] = "uuid";
        result["maxLength"] = 36;
        return result;
    }
    if(name.indexOf('Date') > -1) {
        result["format"] = "date-time";
    }

    return result;
} 
let mapping = {};

_.each(schema.items.properties,
(val, key) => {
    var type = getType(val.properties);

    if(type.indexOf("array") > -1) return;

    mapping[key] = {
            type,
            ...getAdditional(val, key)
        }
});

const result = {};
const props = _.sortBy(_.keys(mapping));
_.each(props, p => {
    result[p] = mapping[p];
})
fs.writeFileSync("catalog.json", JSON.stringify(result, null, 2))