const review = [
    {
        id: 0,
        clientName: 'Subham Baidya',
        clientLocation: 'Kolkata',
        clientSource: 'Freelancer',
        clientReview: 'It is always nice to work with him. The work is finished quickly and he does more than is asked of him. It is also clear that he has a lot of knowledge of the work he does. I look forward to our next collaboration.'
    },
    {
        id: 2,
        clientName: 'Rahul Singh',
        clientLocation: 'Kolkata',
        clientSource: 'Friend Circle',
        clientReview: 'He is very good with communication and experienced website developer, great experience to work with him. '
    },
    {
        id: 3,
        clientName: 'Kingshuk Kumar',
        clientLocation: 'Kolkata',
        clientSource: 'Friend Circle',
        clientReview: 'The work is finished quickly and he does more than is asked of him. '
    },
    
]
export default function handler(req, res) {
    res.status(200).json(review)
}
