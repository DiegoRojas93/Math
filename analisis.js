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

function returnCompany () {
    const companies = {};
          
    salarios.forEach(({trabajos}) => {
        trabajos.forEach(({year, empresa, salario}) => {
            if(!companies[empresa]) companies[empresa] = {}

            if (!companies[empresa][year]) companies[empresa][year] = []

            companies[empresa][year].push(salario)
        });
    });    

    return companies
}

function medianPerCompany (company, year) {

    const companies = returnCompany()
    
    if (!companies[company]) console.warn(`La empresa no existe`)
    if (!companies[company][year]) console.warn(`La empresa no dio salarios ese año`)
    
    const media = platziMath.median(companies[company][year]);

    return media
    
}

// Proyeccion de salarios por empresa

function screeningPerCompany(companyName){
    const companies = returnCompany()

    if (!companies[companyName]) return console.warn('La empresa no existe')

    const companiesYears = Object.keys(companies[companyName])

    const listMedianYears = companiesYears.map( year => medianPerCompany(companyName, year))

    console.log(listMedianYears);


    const percentGrowth = []

    for(let i = 1; i < listMedianYears.length; i++){
        const currentSalary = listMedianYears[i],
              lastSalary = listMedianYears[i - 1],
              growth = currentSalary - lastSalary,
              percent = growth / lastSalary;
        
        percentGrowth.push(percent)
    }

    const medianPercentGrowth = platziMath.median(percentGrowth)
    
    const lastMedian = listMedianYears[listMedianYears.length - 1],
    growth = medianPercentGrowth * lastMedian,
    newSalary = growth + lastMedian;

    return newSalary;
    
}