export const getRegion = (v) => /^<?.*region[^:]*:([^\n]+)<+?/im.exec(v);
export const getAddress = (v) => /^<?.*address[^:]*:([^\n]+)<+?/im.exec(v);
export const getName = (v) => /^<?.*name[^:]*:([^\n]+)<+?/im.exec(v);
export const getOrganization = (v) => /^<?.*organization[^:]*:([^\n]+)<+?/im.exec(v);
export const getWebsiteAndSocial = (v) => /^<?.*website.{0,3}social[^:]*:([^\n]+)<+?/im.exec(v);
export const getApprovedAddress = (v) => /approved.*[\r\n]*.*address.*[\r\n]*.*\s+(f[0-9]+[^\r]+)/im.exec(v);
export const regionIsAfrica = (v) => /^\s*(Africa)\s*$/im.test(v);
export const regionIsAsiaNotGreaterChina = (v) => /^\s*(Asia.minus.GCN)\s*$/im.test(v);
export const regionIsEurope = (v) => /^\s*(Europe|EU)\s*$/im.test(v);
export const regionIsGreaterChina = (v) => /^\s*(Asia.GCN|GCN.Asia|China|Greater.China)\s*$/im.test(v);
export const regionIsNorthAmerica = (v) => /^\s*(n\/a|North.America|NA)\s*$/im.test(v);
export const regionIsOceania = (v) => /^\s*(Oceania)\s*$/im.test(v);
export const regionIsSouthAmerica = (v) => /^\s*(South.America)\s*$/im.test(v);
export const regionIsGlobal = (v) => /^\s*(Global)\s*$/im.test(v);
export const regionIsOther = (v) => /^\s*(Other)\s*$/im.test(v);
export const isValidAddress = (v) => /^f[a-zA-Z0-9]+$/im.test(v);
