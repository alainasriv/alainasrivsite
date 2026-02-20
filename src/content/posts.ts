import AIBuzzword from './blog/AI_ tlb.md';
import NinePerfectStrangers from './blog/Nine Perfect Strangers versus White Lotus.md';
import AIRelationshipsBrain from './blog/AI, relationships, brain.md';

export const posts = {
  'ai-latest-buzzword': {
    component: AIBuzzword,
    title: 'AI: the Latest Buzzword',
    date: '2/23/24',
    excerpt: 'AI is the new big thing. Let\'s talk about it.'
  },
  'nine-perfect-strangers-vs-white-lotus': {
    component: NinePerfectStrangers,
    title: 'Nine Perfect Strangers versus The White Lotus',
    date: '5/30/25',
    excerpt: 'Two shows about improving well-being...'
  },
  'ai-relationships-brain': {
    component: AIRelationshipsBrain,
    title: 'What AI is Doing to Our Brains and Our Relationships',
    date: '2/8/26',
    excerpt: 'What does preliminary research tell us?'
  }
};