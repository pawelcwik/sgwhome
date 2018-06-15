import * as React from 'react';

export interface IProps {
    name: string;
    enthusiamLevel?: number;
}

class Hello extends React.Component<IProps,object> {

    public render() {
        const { name, enthusiamLevel = 1 } = this.props;

        if(enthusiamLevel <= 0) {
            throw new Error("comon'!");
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + this.getExclamationMarks(enthusiamLevel)}
                </div>
            </div>
        );

    }

    private getExclamationMarks(numChars: number): string {
        return Array(numChars + 1).join('!');
    }

}

export default Hello;