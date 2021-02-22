import PropTypes from 'prop-types';

const Students = (props) => {
    return (
        <>
        <h1>Students</h1>
        
            {props.students.map((student) =>{
                const { id, name, lastName, indexNumber, userName, password} = student;
                return(
                    <div key={id} className= 'students'>
                            <p>Name : <span className='blue'>{name}</span></p>
                            <p>Last Name : <span className='blue'>{lastName}</span></p>
                            <p>Index Number: <span className='blue'>{indexNumber}</span></p>
                            <p>User Name : <span className='blue'>{userName}</span></p>
                            <p>Password : <span className='blue'>{password}</span></p>
                    </div>
                )
            })}

            </>
            )
};

Students.propTypes = {
    name: PropTypes.string,
    lastName: PropTypes.string,
    indexNumber: PropTypes.string,
    userName: PropTypes.string,
    password: PropTypes.number,
};

export default Students;