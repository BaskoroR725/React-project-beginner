import './inputData.css'

export default function InputData(){
    <section id='user-input'>
        <div className='user-group'>
            <p>
            <label>Initial Investment</label>
            <input type="number" />
            </p>
            <p>
            <label>Annual Investment</label>
            <input type="number" />
            </p>
        </div>
        <div className='user-group'>
            <p>
            <label>Expected Return</label>
            <input type="number"/>
            </p>
            <p>
            <label>Duration Investment</label>
            <input type="number"/>
            </p>
        </div>
    </section>
}