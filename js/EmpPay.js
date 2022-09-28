    
    let salarySelector = document.querySelector('#salary');
        salarySelector.addEventListener("change", function()
        {
            let rangeValue = document.getElementById('salary');
            document.getElementById('salary_output').value = rangeValue.value;
        });
     