import * as Lint from 'tslint';
import * as utils from 'tsutils';
import * as ts from 'typescript';

export class Rule extends Lint.Rules.AbstractRule {
  public static FAILURE_STRING =
    'Need next and prev empty rows (without spaces and tabs)';

  public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    return this.applyWithWalker(
      new CheckSeparatorStyle(sourceFile, 'block-separator', undefined)
    );
  }
}

class CheckSeparatorStyle extends Lint.AbstractWalker<any> {
  public walk(sourceFile: any): void {
    utils.forEachComment(sourceFile, (fulltext, {pos, end}) => {
      const commentText = fulltext.slice(pos, end);

      let endPrevLine;
      let startPrevLine;

      let startNextLine;
      let endNextLine;

      const currentLine = ts.getLineAndCharacterOfPosition(sourceFile, pos)
        .line;

      if (utils.getLineRanges(sourceFile)[currentLine - 1]) {
        endPrevLine = utils.getLineRanges(sourceFile)[currentLine - 1].end;
        startPrevLine = utils.getLineRanges(sourceFile)[currentLine - 1].pos;
      }

      if (utils.getLineRanges(sourceFile)[currentLine + 1]) {
        startNextLine = utils.getLineRanges(sourceFile)[currentLine + 1].pos;
        endNextLine = utils.getLineRanges(sourceFile)[currentLine + 1].end;
      }

      if (commentText === '// ########################################') {
        if (
          (startPrevLine && endPrevLine !== startPrevLine + 1) ||
          (startNextLine && endNextLine !== startNextLine + 1)
        ) {
          this.addFailure(pos, end, Rule.FAILURE_STRING);
        }
      }
    });
  }
}
