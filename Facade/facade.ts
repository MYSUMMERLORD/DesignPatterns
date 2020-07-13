type Token = any
type Stream = any

/**
 * 接收字符流并产生一个标识符流
 */
class Scanner {
    private _inputStream: Stream
    public constructor(stream: Stream) {}
    public byteScanner(): void {}
    public scan(): Token {}
}

class Parser {
    public constructor() {}
    public tokenParser(): void {}
    public parse(scanner: Scanner, nodeBuild: ProgramNodeBuilder): void {}
}

class ProgramNodeBuilder {
    public constructor() {}
    public newVariable(name: string): IProgramNode {
        return
    }
}

interface IProgramNode {
    getSourcePosition(line: number, index: number): void
    add(node: IProgramNode): void
    remove(node: IProgramNode): void
    traverse(code: ICodeGenerator): void
}

interface ICodeGenerator {
    visit(): void
    generator(name: Stream): void
}
class CodeGenerator implements ICodeGenerator {
    visit(): void {}
    generator(name: Stream) {}
}

class Complier {
    public complier(input: Stream, output: Stream) {
        const scanner: Scanner = new Scanner(input)
        const parser: Parser = new Parser()
        const builder: ProgramNodeBuilder = new ProgramNodeBuilder()
        parser.parse(scanner, builder)

        const codeGenerator: CodeGenerator = new CodeGenerator()
        codeGenerator.visit()
        codeGenerator.generator(output)
        const node: IProgramNode = builder.newVariable('')
        node.traverse(codeGenerator)
    }
}