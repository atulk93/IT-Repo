// Main JS for IT-Repo Wiki
console.log('Welcome to IT-Repo Wiki!');

// Simple search feature for static articles
const articles = [
	{
		title: 'Getting Started',
		url: 'articles/getting-started.html',
		keywords: ['start', 'introduction', 'setup', 'begin'],
		description: 'How to get started with IT-Repo.'
	},
	{
		title: 'Repository Structure',
		url: 'articles/repo-structure.html',
		keywords: ['structure', 'folders', 'files', 'organization'],
		description: 'Description of the folder and file organization.'
	},
	{
		title: 'Contribution Guidelines',
		url: 'articles/contribution-guidelines.html',
		keywords: ['contribute', 'guidelines', 'workflow', 'pull request'],
		description: 'How to contribute to IT-Repo.'
	}
];

function showSearchResults(results) {
	const resultsDiv = document.getElementById('search-results');
	if (results.length === 0) {
		resultsDiv.innerHTML = '<p>No results found.</p>';
	} else {
		resultsDiv.innerHTML = '<h3>Search Results</h3>' +
			'<ul>' +
			results.map(a => `<li><a href="../${a.url}"><strong>${a.title}</strong></a><br><span>${a.description}</span></li>`).join('') +
			'</ul>';
	}
	resultsDiv.style.display = 'block';
}

const searchInput = document.getElementById('search-input');
if (searchInput) {
	searchInput.addEventListener('input', function() {
		const query = searchInput.value.trim().toLowerCase();
		if (!query) {
			document.getElementById('search-results').style.display = 'none';
			return;
		}
		const results = articles.filter(a =>
			a.title.toLowerCase().includes(query) ||
			a.description.toLowerCase().includes(query) ||
			a.keywords.some(k => k.includes(query))
		);
		showSearchResults(results);
	});
}
