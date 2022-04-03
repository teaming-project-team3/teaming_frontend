export function JobTable(props) {

    const { data } = props;
  
    JobTable.defaultProps = {
      data:[],
    }
  
    return (
        <div className="flex w-[100%] justify-center mt-10 mb-10">
        <table className="w-5/6 text-base border border-collapse table-fixed border-slate-400 font-noto2">
          <thead className="text-black">
            <tr>
              <th className="border border-slate-300">모집부문</th>
              <th className="border border-slate-300">담당업무</th>
              <th className="border border-slate-300">모집총원</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            {data.map((item,idx)=>{
                

                return(
                <tr key={idx}>
                <td className="text-center border border-slate-300">
                    {item[0]}
                </td>
                <td className="text-center border border-slate-300">
                    {item[1]}
                </td>
                <td className="text-center border border-slate-300">
                    {item[2]} 명
                </td>
                </tr>
                )
            })
            }
            
          </tbody>
        </table>
      </div>
    );
  }
  
  export default JobTable;
  