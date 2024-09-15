# domain-for-sale

Deploy a for-sale page on Cloudflare Workers.

## Prerequisites

1. Node.js installed on your machine
2. A Cloudflare account
3. Wrangler CLI installed (`npm install -g wrangler`)

## Setup and Deployment

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/domain-for-sale.git
   cd domain-for-sale
   # to change email address in index.html
   ```

2. Login to your Cloudflare account using Wrangler:
   ```
   npx wrangler login
   ```

3. Customize the `index.html` file with your contact information and any additional details.

4. Deploy your worker:
   ```
   npx wrangler deploy
   ```

5. After successful deployment, Wrangler will provide you with a URL where your page is live. You can open the worker setting page to bind your domains.


## Customization

- Edit `index.html` to change the content or styling of your for-sale page.
- Modify `wrangler.toml` if you need to change the project name or other Cloudflare Workers settings.

## Troubleshooting

If you encounter any issues during deployment:

1. Ensure you're in the correct directory containing `wrangler.toml` and `index.js`.
2. Check that your `wrangler.toml` file is correctly configured.
3. Try updating Wrangler to the latest version: `npm install -g wrangler@latest`

For more information on Cloudflare Workers and Wrangler, visit the [official documentation](https://developers.cloudflare.com/workers/).