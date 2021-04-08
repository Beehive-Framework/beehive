export default (ctx) => {
    const originBlocks = import.meta.globEager('../../../../src/blocks/**');
    const blocks = {};
    for(let i in originBlocks) {
        if (/\.(vue|js)$/.test(i)) {
            const key = i.replace(/(\.|\/|\w)+blocks\//, '').replace(/.(vue|js)$/, '');
            blocks[key] = originBlocks[i];
        }
    }
    ctx.blocks = blocks
}