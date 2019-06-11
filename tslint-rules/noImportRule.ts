import * as Lint from 'tslint';
import * as ts from 'typescript';

export class Rule extends Lint.Rules.AbstractRule {
  public static FAILURE_STRING = 'my custom import statement forbidden';

  public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    return this.applyWithWalker(
      new NoImportsWalker(sourceFile, this.getOptions())
    );
  }
}

// The walker takes care of all the work.
class NoImportsWalker extends Lint.RuleWalker {
  public visitImportDeclaration(node: ts.ImportDeclaration) {
    // create a failure at the current position

    console.log(node);
    this.addFailure(
      this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING)
    );

    // call the base version of this visitor to actually parse this node
    super.visitImportDeclaration(node);
  }
}
