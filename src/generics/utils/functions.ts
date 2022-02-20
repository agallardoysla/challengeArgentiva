export const normalize = (function () {
  var from = 'ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç',
    to = 'AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc',
    mapping: {[key: string]: string} = {};

  for (var i = 0, j = from.length; i < j; i++)
    mapping[from.charAt(i)] = to.charAt(i);

  return function (str: string) {
    var ret = [];
    for (var i = 0, j = str.length; i < j; i++) {
      var c = str.charAt(i);
      if (mapping.hasOwnProperty(str.charAt(i))) ret.push(mapping[c]);
      else ret.push(c);
    }
    return ret.join('');
  };
})();

export const search = (text1: string, text2: string) => {
  const text1Normalize = normalize(text1).toUpperCase();
  const text2Normalize = normalize(text2).toUpperCase();
  let match = normalize(text1Normalize).toUpperCase().match(text2Normalize);
  if (match == null) {
    return false;
  }
  return match.length > 0;
};
