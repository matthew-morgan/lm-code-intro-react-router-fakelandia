const Confession: React.FC = () => <>Confession!</>;

type Props = {
    value: string;
    onChange: (value: string) => void;
};

const SubjectInput: React.FC<Props> = ({ value, onChange }) => {
    return (
        <div>
            <label htmlFor="subject">Subject:</label>
            <input
                type="text"
                id="subject"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};



export default Confession;