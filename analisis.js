console.log(salarios);

// Analisís de salarios de Juanita

function findPerson (person) {
    return salarios.find(({ name }) => person)
}

function medianPerPerson (person) {
    const trabajos = findPerson(person).trabajos

    const salarios = trabajos.map(({ salario }) => salario )

    const medianSalaries = platziMath.median(salarios)

    console.log(medianSalaries);
}

function screeningPerPerson (person) {
    const JOBS = findPerson(person).trabajos

    const percentGrowth = []

    for(let i = 1; i < JOBS.length; i++){
        const currentSalary = JOBS[i].salario,
              lastSalary = JOBS[i - 1].salario,
              growth = currentSalary - lastSalary,
              percent = growth / lastSalary;
        
        percentGrowth.push(percent)
    }

    const medianPercentGrowth = platziMath.median(percentGrowth)

    console.log(percentGrowth, medianPercentGrowth);

    const lastSalary = JOBS[JOBS.length - 1].salario,
          growth = medianPercentGrowth * lastSalary,
          newSalary = growth + lastSalary;

    return newSalary;
}

// Análisis empresarial

function returnCompany (company) {
    const companies = {};
          
    // console.log('Salarios', salarios);

    const persons = salarios.map( person => {
        const { name, trabajos } = person;

        for (const job of trabajos) {
            if (job.empresa === company) return {
                name
            }
        }
    });

    console.log(persons);
}