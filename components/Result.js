import { Thubnail } from "./Thubnail";



export const Result = ({result}) => {
    return (
        <div>
            {result.map((result)=> (
                <Thubnail key={result.id} result={result} />
            ))}
        

        </div>
    );
}
