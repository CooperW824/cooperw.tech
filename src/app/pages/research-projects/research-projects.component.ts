import { Component } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';

interface ResearchProject {
	title: string;
	abstract: string;
	paperLink: string;
	codeLink: string;
	authors?: string;
	venue?: string;
}

@Component({
	selector: 'coop-research-projects',
	templateUrl: './research-projects.component.html',
	styleUrls: ['./research-projects.component.css'],
	standalone: false
})
export class ResearchProjectsComponent {
	readonly researchProjects: ResearchProject[] = [
		{
			title: 'Exploring MPI and CUDA Algorithms for Parallel LU Decomposition on Large Dense Matrices',
			abstract: `The ability to solve linear systems of equations is fundamental to a number of fields from engineering, 
      to chemistry and computer science. The most popular method for solving systems of linear equations is through 
      LU decomposition for its numerical stability, better performance, and reusability for a variety of input vectors.
       Existing research focused on parallelizing LU decomposition for smaller matrices using one parallelization strategy.
        As simulations become more complex, there becomes a growing need to solve larger systems of equations faster.
         In this paper we present a comparative performance study utilizing high performance computing for LU decomposition 
         across MPI and CUDA implementations to evaluate their performance and scalability. Our results indicate for 
         matrices small enough to fit inside one GPU's memory (~32GB for our setup), utilizing one CUDA device was the fastest 
         way to perform LU Decomposition, performing 10% faster than MPI-Based Solution and 361% faster than our MPI and CUDA hybrid strategy. 
         The poor performance of our MPI-CUDA strategy demonstrates that for matrices small enough to fit in a single CUDA device's memory, 
         single device computation is still the best way to perform LU decomposition. For larger matrices, hybrid or multi-GPU computation 
         could still prove to be a faster method for performing LU decomposition provided more work occurs to optimize performance.`,
			authors: 'Cooper W., Xenia K.',
			venue: 'CSCI 4320 - Parallel Computing and Programming, Rensselaer Polytechnic Institute',
			paperLink:
				'https://cooperw-downloads.s3.us-east-2.amazonaws.com/cooperw.tech/Werner_Khusid_Exploring_MPI_CUDA.pdf',
			codeLink: 'https://github.com/CooperW824/PCP-2026-Final-Project'
		}
	];

	faGitHub = faGithub;
	faFileLines = faFileLines;
}
