import React from "react";

function EnterComment({value, onChange}) {
    return (
        <div className="form-item">
            <label htmlFor="comment">Ваши пожелания</label>
            <textarea name="comment" placeholder='Введите комментарий...' id="comment" value={value}
                      onChange={onChange}>
            </textarea>
        </div>
    );
}

export default EnterComment;