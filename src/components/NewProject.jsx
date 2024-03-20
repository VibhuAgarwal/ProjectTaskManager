import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
import NoProjectSelected from "./NoProjectSelected";

export default function NewProject({ onAdd, onCancel }) {
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title?.current?.value;
        const enteredDescription = description?.current?.value;
        const enteredDueDate = dueDate?.current?.value;

        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });
    }


    return (
        <>
            <Modal ref={modal} buttonCaption='Close'>
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className='text-stone-600 mb-4'>Ooooppppsssss... Looks like you forgot to enter the value</p>
                <p className='text-stone-600 mb-4'>Make sure you provide valid input for every input field</p>
            </Modal>
            <div className="w-[35rem] mt-16 ">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li><button
                        className="px-6 py-2 rounded-md text-stone-50 bg-red-600 hover:bg-red-700" onClick={onCancel}>
                        Cancel
                    </button></li>
                    <li><button className="px-6 py-2 rounded-md  bg-stone-800 text-stone-50 hover:bg-stone-950"
                        onClick={handleSave}
                    >Save</button></li>
                </menu>
                <div>
                    <Input type='text' label="Title" ref={title} placeholder='Enter title' />
                    <Input label="Description" textarea ref={description} placeholder='Enter Description' />
                    <Input type='date' label="Due Date" ref={dueDate} />
                </div>
            </div >
        </>
    );
}