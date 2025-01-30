const TaskFilters = ({ assigneeOptions, assignorOptions }) => {
    return (
        <div>
            <div>
                <label>Assignee</label>
                <select></select>
            </div>
            <div>
                <label>Assignor</label>
                <select></select>
            </div>
            <div>
                <label>Deadline</label>
                <deadline></deadline>
            </div>
        </div>
    );
};
