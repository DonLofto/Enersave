import React from "react";
function  UsageForm() {
    const [usage, setUsage] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(usage); //replace with actual submission logic
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Monthly Usage (kWh):
                <input type="number" value={usage} onChange={(e) => setUsage(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default UsageForm;
// Path: src/components/UsageForm.js
