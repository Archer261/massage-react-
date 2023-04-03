const services = [

    {
        title: `Relaxation Body Massage/Light Medium Pressure`,
        description: `Relaxing Body massage helps your tired mind and body to unwind , calm your nerves.

        It also releases tensions and migraines, reduce stress resulting better circulation
        
        Improves sleep cycle and better focus at work.
        
        Stretches are included in this massage  `,
        packs: [{
            time: 60,
            price: 70
        },
        {
            time: 90,
            price: 100
        },
        {
            time: 120,
            price: 150
        }]

    },
    {
        title: `Deep Tissue Massage Deeper Pressure`,
        description: `Slow, deliberate massage techniques using elbows, forearms & thumbs to relieve tightness from overusing and tension in muscles.

 

        Benefits include relief of sore muscles, headache, backache, and stress. 
        
         
        
        Lavender essential oils included. `,
        packs: [{
            time: 60,
            price: 80
        },
        {
            time: 90,
            price: 120
        }]

    },
    {
        title: `Therapeutic Massage`,
        description: `Issues with neck, back & shoulder /hip
        -sciatica (shooting pain from hip to the legs)
        
         
        
        This is a Pain relieving massage!
        
        This is the one for you!
        
        
        Stretches, trigger points,
        essentials oils & plus a good clean hot towel all included!`,
        packs: [{
            time: 60,
            price: 90
        },
        {
            time: 90,
            price: 120
        }]

    },
    {
        title: `Couples Massage (Per couple)`,
        description: `Lavender essential oils included. A couple's massage allows partners to experience a relaxing massage together.

 

        The massage will help release tension and stress while spending quality time with a loved one. 
        
         
        
        MUST book 2 weeks ahead as therapists scheduled are taken up fast`,
        packs: [{
            time: 60,
            price: 120
        },
        {
            time: 90,
            price: 180
        }]

    },
    {
        title: `Relaxation Body Massage/Light Medium Pressure`,
        description: `Enhance your performance and speed up your recovery when you take advantage of our sports massage. 

 

        By loosening tight muscle fibers and enhancing the blood flow, will increase the capacity of mission-critical muscle groups. 
        
         
        
        Hot Towel Included!`,
        packs: [{
            time: 60,
            price: 90
        },
        {
            time: 90,
            price: 120
        }]

    },
    {
        title: `Prenatal Massage`,
        description: `A happier mom makes a healthier baby. Moms-to-be will love curling up in soft pillows while their changing bodies are massaged to blissful comfort.

 

        This massage relieves moms from backaches and sciatic pains.`,
        packs: [{
            time: 60,
            price: 80
        }]

    },

];

const packages = [
    {
        title: `Relaxing Body Massage`,
        description: ``,


        time: 60,
        price: 250,
        inclusions: ["One Free Facial Lymphatic for New clients", "One Free parafin hand wax", "Free Organic Green Tea"]

    },
    {
        title: `4 Back Massage`,
        description: `it eases muscle tensions, reduced spasms ans inflammation.

 

        Massage therapy can provide substantial healing and pain relief for lower back problems.
        
         
        
        Specifically, for pain caused by a back strain, when the correct muscle is targeted, the pain can be controlled at its source- for quicker and lasting relief.`,


        time: 40,
        price: 250,
        inclusions: []

    },
    {
        title: `Deep Tissue Body Massages`,
        description: `Deep Tissue Body Massages incld hot towels, using organic essential oils`,


        time: 60,
        price: 450,
        inclusions: ["Feet Massage", "Free Full Size Body Wash", "Green tea"]

    }
]

export default { services, packages }