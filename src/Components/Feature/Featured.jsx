import MUIDataTable from "mui-datatables";


const Featured = () => {   

    const columns = [
        {
         name: "title",
         label: "Title",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "category",
         label: "Category",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "read",
         label: "read",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "Blogger",
         label: "Blogger",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "number",
         label: "Number",
         options: {
          filter: true,
          sort: false,
         }
        },
       ];
       const data = [
        { title: "Iran prepare for war", category: "International News", read: "270 ", Blogger: "Abdullah", number:"1"  },
        { title: "Hamas' Surprise Attack in Israel", category: "International News", read: "233", Blogger: "Asif" , number:"2" },
        { title: "Philippine radio on livestream", category: "Education", read: "232", Blogger: "Abdullah" , number:"3" },
        { title: "Top 6 book of 100 year", category: "Self Development", read: "125", Blogger: "Abdullah", number:"4", number:"4"  },
        { title: "Rassia attack Ukrine 1.5 year pass", category: "International News", read: "123", Blogger: "Asif", number:"5"  },
        { title: "Skin Care in Winter", category: "Health Care", read: "93", Blogger: "Ira Islam" , number:"6" },
        { title: "The Benefits of Reading Newspapers", category: "Self Development", read: "73", Blogger: "Asif", number:"7" },
        { title: "City of Happiness", category: "Romantic", read: "44", Blogger: "Abdullah" , number:"8" },
        { title: "live why beautiful", category: "Romantic", read: "23", Blogger: "Asif" , number:"9" },
        { title: "be one for mankind", category: "philosophy", read: "13", Blogger: "Abdullah" , number:"10" },
       ];
       
       const options = {
         filterType: 'checkbox',
       };
    return (
        <div className="my-4 mb-4">
            <MUIDataTable
            title={"Top Blog Analysis"}
            data={data}
            columns={columns}
            options={options}
            />
        </div>
    );
};

export default Featured;