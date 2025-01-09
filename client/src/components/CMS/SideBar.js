import '../../css/SideBar.css'

function SideBar(props) {



    function handleClick(e){
        props.getLi(e.target.id);
    }

    return ( 
        <aside>
            <h1>داشبورد</h1>
            <ul>
                <li id='add' onClick={handleClick}>افزودن محصول جدید</li>
                <li id='update' onClick={handleClick}>به‌روزرسانی محصول </li>
                <li id='delete' onClick={handleClick}>حذف محصول</li>
                <li id='price' onClick={handleClick}>تعرفه میز ها</li>
                <li id='tournament' onClick={handleClick}>  شروع مسابقاه جدید</li>
            </ul>
        </aside>
     );
}

export default SideBar;