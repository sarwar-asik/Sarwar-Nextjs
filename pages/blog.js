import React from 'react';


const blog = () => {
    return (
        <div>
         <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Site</th>
        <th>Detail</th>
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <th>1</th>
        <td>Learn Design</td>
        <td>Prothom ALo</td>
        <td><button className='btn btn-sm btn-primary'>Detail</button></td>
      </tr>
      
      <tr>
        <th>2</th>
        <td>Learn Frontend</td>
        <td>Daily Star</td>
        <td><button className='btn btn-sm btn-primary'>Detail</button></td>
      </tr>
      <tr>
        <th>3</th>
        <td>MERN Learning</td>
        <td>BBC News</td>
        <td><button className='btn btn-sm btn-primary'>Detail</button></td>
      </tr>
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default blog;