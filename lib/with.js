const nunjucks = require('nunjucks');

module.exports = () => {
  this.tags = ['with'];

  this.parse = (parser, nodes) => {
    const token = parser.nextToken();
    const args = parser.parseSignature(null, true);

    parser.advanceAfterBlockEnd(token.value);
    const body = parser.parseUntilBlocks('endwith');
    parser.advanceAfterBlockEnd();

    if (args.children.length > 0) {
        return new nodes.CallExtension(this, 'run', args, [body]);
    }
  }

  this.run = (context, ...args) => {
    const body = args.pop();
    const ctx = args[0] || {};
    return new nunjucks.runtime.SafeString(context.env.renderString(body(), ctx));
  };

}